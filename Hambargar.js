const Hambargar = ({ isOpen, toggle }) => {
  return (
    <div>
      <label
        htmlFor="hambargar"
        className="w-6 h-5 flex flex-col justify-between cursor-pointer select-none"
      >
        <input
          type="checkbox"
          checked={isOpen}
          onChange={() => toggle(!isOpen)}
          id="hambargar"
          className="hidden peer"
        />
        <span className="bg-primary h-[3px] rounded-full transition-all duration-300 origin-left peer-checked:rotate-45"></span>
        <span className="bg-primary h-[3px] rounded-full transition-all duration-300 origin-left peer-checked:opacity-0"></span>
        <span className="bg-primary h-[3px] rounded-full transition-all duration-300 origin-left peer-checked:-rotate-45"></span>
      </label>
    </div>
  )
}

export default Hambargar
