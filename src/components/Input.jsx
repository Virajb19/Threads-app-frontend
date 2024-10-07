export default function Input({text,value,onChange}) {

    function handleKeyDown(e) {
        if(e.key === 'ArrowDown') {
            console.log('Key pressed')
        }
    }

    return <input onKeyDown={handleKeyDown} value={value} onChange={onChange} 
    className="bg-[#1E1E1E] p-4 rounded-lg text-base focus:outline-none text-white w-4/5 border-2 border-transparent focus:border-gray-500" 
    type={text == "password" ? "password" : "text"} placeholder={text} />
  }