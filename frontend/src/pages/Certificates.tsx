import React from 'react';
import { Download, Share2, Eye } from 'lucide-react';

function Certificates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Certificates</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          View on EDU Chain
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Certificates" value="6" />
        <StatCard title="Verified on Chain" value="6" />
        <StatCard title="Total Course Hours" value="120" />
      </div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} {...certificate} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

function CertificateCard({ title, issueDate, tokenId, image, verified }: {
  title: string;
  issueDate: string;
  tokenId: string;
  image: string;
  verified: boolean;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {verified && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Verified
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">Issued on: {issueDate}</p>
          <p className="text-sm text-gray-600">Token ID: {tokenId}</p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <Download className="h-4 w-4" />
            Download
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

const certificates = [
  {
    title: "Web3 Fundamentals",
    issueDate: "March 15, 2025",
    tokenId: "EDU-0x1234...5678",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    verified: true
  },
  {
    title: "Introduction to Blockchain",
    issueDate: "February 28, 2025",
    tokenId: "EDU-0x8765...4321",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",
    verified: true
  },
  {
    title: "Smart Contract Development",
    issueDate: "January 15, 2025",
    tokenId: "EDU-0x9876...5432",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
    verified: true
  },
  {
    title: "Advanced Cryptography",
    issueDate: "December 20, 2024",
    tokenId: "EDU-0x3456...7890",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    verified: true
  }
];

export default Certificates;