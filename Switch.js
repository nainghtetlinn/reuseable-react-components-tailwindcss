const Switch = ({ isOn, toggle }) => {
  return (
    <div>
      <label
        htmlFor="switch"
        className="bg-gray-200 flex w-10 h-5 p-[2px] rounded-full cursor-pointer select-none group"
      >
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => toggle(!isOn)}
          id="switch"
          className="hidden peer"
        />
        <span className="bg-slate-400 active:bg-slate-500 inline-block h-full w-4 transition-all duration-300 ease-in-out rounded-full hover:ring-8 hover:ring-slate-400/40 peer-checked:bg-cyan-500 peer-checked:active:bg-cyan-600 peer-checked:hover:ring-cyan-500/40 peer-checked:translate-x-5"></span>
      </label>
    </div>
  )
}

export default Switch
