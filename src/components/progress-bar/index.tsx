

export type ProgressBarProps = {

}


export function ProgressBar() {
  return (
    <div className="flex h-32 items-center justify-center mt-10 w-full">
      <div className=" w-4/5 flex items-center ">
        <span className="w-20">1 / 45</span>
        <div className="shrink w-full h-4  bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
        </div>
      </div>
    </div>
  )
}