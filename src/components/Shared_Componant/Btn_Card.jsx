
    const Btn_Card = ({ title, onClick }) => {
      return (
        <button 
        className="px-4 py-2 font-bold text-center  text-white bg-[#21857C] rounded-2xl border border-[#21857C] w-full hover:bg-white hover:text-[#21857C] transition-all duration-300"
          onClick={onClick} 
        >
          {title}
        </button>
      );
    };
    export default Btn_Card;