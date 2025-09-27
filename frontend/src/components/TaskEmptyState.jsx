import React from 'react'
import { Card } from './ui/card'
import { Circle } from 'lucide-react'

const TaskEmptyState = ({ filter }) => {
  return (
    <div>
      <Card className="p-8 text-center border-0 bgradient-card shadow-custom-md">
        <div className="space-y-3">
          <Circle className="size-12 mx-auto text-muted-foreground" />
          <div>
            <h3 className="font-medium text-foreground">
              {filter === 'active'
                ? 'Không có phiền phức nào cần làm!'
                : filter === 'completed'
                ? 'Chưa có phiền phức nào hoàn thành!'
                : 'Không có phiền phức nào. Thật tuyệt vời!'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {filter === 'all'
                ? 'Hãy thêm phiền phức mới để bắt đầu!'
                : `Hãy chuyển sang tab "tất cả" để thấy phiền phức ${
                    filter === 'active' ? 'đang làm' : 'hoàn thành'
                  }.`}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default TaskEmptyState
