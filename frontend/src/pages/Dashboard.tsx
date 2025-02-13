import React from 'react';
import { BookOpen, Clock, Award, Trophy } from 'lucide-react';

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<BookOpen className="h-6 w-6 text-indigo-600" />}
          title="Active Courses"
          value="4"
        />
        <StatCard
          icon={<Clock className="h-6 w-6 text-indigo-600" />}
          title="Learning Hours"
          value="32.5"
        />
        <StatCard
          icon={<Award className="h-6 w-6 text-indigo-600" />}
          title="Certificates"
          value="2"
        />
        <StatCard
          icon={<Trophy className="h-6 w-6 text-indigo-600" />}
          title="Achievement Score"
          value="850"
        />
      </div>

      {/* Current Courses */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Courses</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {currentCourses.map((course, index) => (
          <CourseProgressCard key={index} {...course} />
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
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

function CourseProgressCard({ title, progress, lastAccessed, nextLesson }: {
  title: string;
  progress: number;
  lastAccessed: string;
  nextLesson: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-indigo-600">{progress}%</span>
        </div>
        <div className="w-full bg-indigo-100 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="space-y-2 text-sm text-gray-600">
        <p>Last accessed: {lastAccessed}</p>
        <p>Next lesson: {nextLesson}</p>
      </div>
    </div>
  );
}

function ActivityItem({ type, course, date }: { type: string; course: string; date: string }) {
  return (
    <div className="p-4 border-b last:border-b-0 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">{type}</p>
          <p className="text-sm text-gray-600">{course}</p>
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
    </div>
  );
}

const currentCourses = [
  {
    title: "Introduction to Blockchain",
    progress: 75,
    lastAccessed: "Today at 2:30 PM",
    nextLesson: "Smart Contracts Basics"
  },
  {
    title: "Advanced Cryptography",
    progress: 45,
    lastAccessed: "Yesterday at 4:15 PM",
    nextLesson: "Zero-Knowledge Proofs"
  }
];

const activities = [
  {
    type: "Completed Lesson",
    course: "Introduction to Blockchain - Consensus Mechanisms",
    date: "2 hours ago"
  },
  {
    type: "Earned Certificate",
    course: "Web3 Fundamentals",
    date: "Yesterday"
  },
  {
    type: "Started Course",
    course: "Advanced Cryptography",
    date: "2 days ago"
  },
  {
    type: "Completed Quiz",
    course: "Introduction to Blockchain - Blockchain Basics",
    date: "3 days ago"
  }
];

export default Dashboard;