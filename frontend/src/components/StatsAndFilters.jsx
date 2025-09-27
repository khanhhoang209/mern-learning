import { Filter } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { FilterType } from '@/lib/data'
import { Badge } from './ui/badge'

const StatsAndFilters = ({
  completedTasksCount = 0,
  activeTaskCount = 0,
  filter = 'all',
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      {/* Stats */}
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="bg-white/50 text-accent-foreground border-info/20"
        >
          {activeTaskCount} {FilterType.active}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-white/50 text-success border-success/20"
        >
          {completedTasksCount} {FilterType.complete}
        </Badge>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-2 sm:flex-row">
        {Object.keys(FilterType).map((type) => (
          <Button
            key={type}
            variant={filter === type ? 'gradient' : 'ghost'}
            size="sm"
            className="capitalize"
          >
            <Filter className="size-4" />
            {FilterType[type]}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default StatsAndFilters
