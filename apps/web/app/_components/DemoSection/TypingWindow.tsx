export default function TypingWindow({ text }: { text: string }) {
  return (
    <div className="aspect-video relative">
      {/* blur background */}
      <div className="absolute w-full h-full backdrop-blur-[5px] rounded-3xl" />

      <div className="absolute inset-0 rounded-3xl shadow-2xl px-2 h-full w-full flex items-center xs:px-12">
        {/* Text editor */}
        <div className="relative bg-[#FAFAFA] rounded-2xl w-full p-2 shadow-lg">
          <div className="bg-white rounded-2xl p-4 font-mono text-[#333333] min-h-[100px] relative border-2 border-[#FFE156]">
            <div className="flex items-center gap-2 mb-2 opacity-50">
              <div className="w-3 h-3 rounded-full bg-[#FF5C8D]" />
              <div className="w-3 h-3 rounded-full bg-[#FFE156]" />
              <div className="w-3 h-3 rounded-full bg-[#7DEDFF]" />
            </div>
            <p>
              {text}
              <span className="inline-block w-2 h-4 bg-[#FF5C8D]" />
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -top-8 -left-6 bg-[#7DEDFF] p-2 rounded-full font-pixel text-sm -rotate-3 sm:p-3">
        Your typing buddy!
      </div>
    </div>
  );
}
