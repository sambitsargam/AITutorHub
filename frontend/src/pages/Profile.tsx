import React from 'react';
import { Settings, Edit3, Shield, Award, BookOpen, Clock, Trophy } from 'lucide-react';

function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
              <Edit3 className="h-4 w-4 text-gray-600" />
            </button>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">Alex Thompson</h1>
              <span className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                Advanced Learner
              </span>
            </div>
            <p className="text-gray-600 mb-4">Web3 Developer | Blockchain Enthusiast</p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Settings className="h-4 w-4" />
                Edit Profile
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Shield className="h-4 w-4" />
                Wallet Connected
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Award className="h-6 w-6 text-indigo-600" />}
          title="Certificates Earned"
          value="6"
        />
        <StatCard
          icon={<BookOpen className="h-6 w-6 text-indigo-600" />}
          title="Courses Completed"
          value="8"
        />
        <StatCard
          icon={<Clock className="h-6 w-6 text-indigo-600" />}
          title="Learning Hours"
          value="120"
        />
        <StatCard
          icon={<Shield className="h-6 w-6 text-indigo-600" />}
          title="Reputation Score"
          value="950"
        />
      </div>

      {/* Learning Path */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Path</h2>
        <div className="space-y-6">
          {learningPath.map((item, index) => (
            <LearningPathItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-indigo-50 p-3 rounded-lg">{icon}</div>
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
    </div>
  );
}

function LearningPathItem({ title, status, date, description }: {
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  date: string;
  description: string;
}) {
  const statusColors = {
    completed: 'bg-green-500',
    'in-progress': 'bg-blue-500',
    upcoming: 'bg-gray-300'
  };

  return (
    <div className="flex gap-4">
      <div className={`w-3 h-3 rounded-full mt-2 ${statusColors[status]}`}></div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function AchievementCard({ title, icon, date }: { title: string; icon: React.ReactNode; date: string }) {
  return (
    <div className="bg-indigo-50 p-4 rounded-xl text-center">
      <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
}

const learningPath = [
  {
    title: "Web3 Fundamentals",
    status: "completed" as const,
    date: "March 2025",
    description: "Completed with distinction (95%)"
  },
  {
    title: "Advanced Smart Contracts",
    status: "in-progress" as const,
    date: "April 2025",
    description: "Currently working on final project"
  },
  {
    title: "Zero-Knowledge Proofs",
    status: "upcoming" as const,
    date: "May 2025",
    description: "Prerequisites completed"
  }
];

const achievements = [
  {
    title: "Early Adopter",
    icon: <Award className="h-6 w-6 text-indigo-600" />,
    date: "Jan 2025"
  },
  {
    title: "Quick Learner",
    icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
    date: "Feb 2025"
  },
  {
    title: "Top Performer",
    icon: <Trophy className="h-6 w-6 text-indigo-600" />,
    date: "Mar 2025"
  },
  {
    title: "Chain Master",
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    date: "Mar 2025"
  }
];

export default Profile;