import React from 'react'

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                Tuyệt vời! Bạn đã hoàn thành {completedTasksCount} phiền phức
                {activeTasksCount > 0 &&
                  `, còn ${activeTasksCount} phiền phức nữa thôi. Cố lên!`}
              </>
            )}
            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Bạn còn {activeTasksCount} phiền phức cần hoàn thành. Cố lên!</>
            )}
          </p>
        </div>
      )}
    </>
  )
}

export default Footer
