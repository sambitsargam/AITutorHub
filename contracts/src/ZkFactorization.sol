// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract AITutorHub {
    bytes32 public constant PROVING_SYSTEM_ID = keccak256(abi.encodePacked("groth16"));

    address public immutable zkvContract;
    bytes32 public immutable vkHash;

    mapping(address => bool) public hasCertified;
    mapping(address => string) public studentSubmissions;

    event AssignmentSubmitted(address indexed student, string assignmentHash);
    event CertificateIssued(address indexed student);

    constructor(address _zkvContract, bytes32 _vkHash) {
        zkvContract = _zkvContract;
        vkHash = _vkHash;
    }

    function submitAssignment(
        string calldata assignmentHash,
        uint256 attestationId,
        bytes32[] calldata merklePath,
        uint256 leafCount,
        uint256 index
    ) external {
        require(!hasCertified[msg.sender], "Certificate already issued");
        require(_verifyProof(attestationId, msg.sender, merklePath, leafCount, index), "Invalid proof");

        studentSubmissions[msg.sender] = assignmentHash;
        emit AssignmentSubmitted(msg.sender, assignmentHash);
        
        hasCertified[msg.sender] = true;
        emit CertificateIssued(msg.sender);
    }

    function getSubmission(address student) external view returns (string memory) {
        return studentSubmissions[student];
    }

    function checkCertification(address student) external view returns (bool) {
        return hasCertified[student];
    }

    function _verifyProof(
        uint256 attestationId,
        address student,
        bytes32[] calldata merklePath,
        uint256 leafCount,
        uint256 index
    ) internal view returns (bool) {
        bytes32 leaf = keccak256(
            abi.encodePacked(
                PROVING_SYSTEM_ID, vkHash, keccak256(abi.encodePacked(_changeEndianess(uint256(uint160(student)))))
            )
        );
        (bool success, bytes memory result) = zkvContract.staticcall(
            abi.encodeWithSignature(
                "verifyProofAttestation(uint256,bytes32,bytes32[],uint256,uint256)",
                attestationId,
                leaf,
                merklePath,
                leafCount,
                index
            )
        );
        require(success, "zkVerify call failed");
        return abi.decode(result, (bool));
    }

    function _changeEndianess(uint256 input) internal pure returns (uint256 v) {
        v = input;
        v = (v >> 128) | (v << 128);
        return v;
    }
}
