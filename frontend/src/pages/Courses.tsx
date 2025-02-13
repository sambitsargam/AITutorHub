import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Users, Star } from 'lucide-react';

function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Continue Learning
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Categories</option>
            <option value="blockchain">Blockchain</option>
            <option value="cryptography">Cryptography</option>
            <option value="smart-contracts">Smart Contracts</option>
            <option value="web3">Web3</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}

function CourseCard({ title, description, image, duration, students, rating, instructor }: {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  instructor: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {students} students
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400" />
            {rating}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">By {instructor}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

const courses = [
  {
    title: "Introduction to Blockchain",
    description: "Learn the fundamentals of blockchain technology and its applications.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80",
    duration: "8 weeks",
    students: 1234,
    rating: 4.8,
    instructor: "Dr. Sarah Chen"
  },
  {
    title: "Advanced Cryptography",
    description: "Master the principles of modern cryptography and security.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    duration: "10 weeks",
    students: 856,
    rating: 4.9,
    instructor: "Prof. Michael Brown"
  },
  {
    title: "Smart Contract Development",
    description: "Build and deploy smart contracts on EDU Chain.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
    duration: "12 weeks",
    students: 2341,
    rating: 4.7,
    instructor: "Alex Rivera"
  },
  {
    title: "Web3 Development Fundamentals",
    description: "Learn to build decentralized applications with Web3 technologies.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    duration: "10 weeks",
    students: 1567,
    rating: 4.6,
    instructor: "Emma Wilson"
  },
  {
    title: "Zero-Knowledge Proofs",
    description: "Understanding and implementing zero-knowledge proof systems.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    duration: "8 weeks",
    students: 789,
    rating: 4.9,
    instructor: "Dr. James Lee"
  },
  {
    title: "Blockchain Security",
    description: "Learn to secure blockchain applications and smart contracts.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    duration: "6 weeks",
    students: 1123,
    rating: 4.8,
    instructor: "Maria Garcia"
  }
];

export default Courses;