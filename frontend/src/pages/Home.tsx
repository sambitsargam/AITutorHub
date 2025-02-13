import React from 'react';
import { Award, Brain, Shield, BarChart3, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Decentralized Learning with
            <span className="text-indigo-600"> AI-Powered Verification</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience personalized learning with blockchain-verified credentials and AI tutoring.
            Your educational journey, secured by zkVerify on EDU Chain.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/courses"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 flex items-center transition-colors"
            >
              Start Learning
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/courses"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              View Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-indigo-600" />}
            title="AI-Driven Learning"
            description="Personalized learning experience with adaptive AI tutoring tailored to your pace and style."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8 text-indigo-600" />}
            title="Verified Credentials"
            description="Earn blockchain-verified certificates using zkVerify proof technology."
          />
          <FeatureCard
            icon={<BarChart3 className="h-8 w-8 text-indigo-600" />}
            title="Progress Tracking"
            description="Monitor your learning journey with detailed analytics and achievement metrics."
          />
          <FeatureCard
            icon={<Award className="h-8 w-8 text-indigo-600" />}
            title="NFT Certificates"
            description="Receive unique NFT-based certificates for completed courses and achievements."
          />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            image="https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
            title="Introduction to Blockchain"
            description="Learn the fundamentals of blockchain technology and its applications."
            progress={75}
          />
          <CourseCard
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            title="Advanced Cryptography"
            description="Master the principles of modern cryptography and security."
            progress={45}
          />
          <CourseCard
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80"
            title="Smart Contract Development"
            description="Build and deploy smart contracts on EDU Chain."
            progress={30}
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CourseCard({ image, title, description, progress }: { image: string; title: string; description: string; progress: number }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block text-indigo-600">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                {progress}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
            <div
              style={{ width: `${progress}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;