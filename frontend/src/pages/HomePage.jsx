import AddTask from '@/components/AddTask'
import DateTimeFilter from '@/components/DateTimeFilter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StatsAndFilters from '@/components/StatsAndFilters'
import TaskList from '@/components/TaskList'
import TaskListPagination from '@/components/TaskListPagination'
import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Teal Glow Top */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: '#ffffff',
          backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(56, 193, 182, 0.5),
          transparent 70%
        )
      `,
          filter: 'blur(80px)',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Your Content/Components */}
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          <Header />
          <AddTask />
          <StatsAndFilters />
          <TaskList />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilter />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomePage
