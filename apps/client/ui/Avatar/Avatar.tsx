export const Avatar = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full border-2 border-primary bg-avatar-img" />
      <div className="ml-2">
        <h4 className="text-xs font-semibold">Joachim Kowalski</h4>
        <p className="text-[10px] text-text-color/50 tracking-wide">j.kowalski@gmail.com</p>
      </div>
    </div>
  )
}
