
export default function Home() {
  return (
    <>
      <div>
        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto leading-10">
              <div className="text-center mb-12">
                <div className="w-full mx-auto">
                  <div className="relative mb-4 pt-8">
                    <img src="./car-bg.svg" alt="Carsome Certified Video" className="w-full h-full rounded" />
                  </div>
                </div>
                <div className="max-w-7xl mx-auto my-0 pt-7 px-5">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 custom-underline tracking-wide">DỊCH VỤ KIỂM TRA XE CŨ 175 ĐIỂM</h2>
                  <h3 className="font-bold text-gray-900">175 điểm kiểm tra – Minh bạch giá trị, trọn vẹn niềm tin!</h3>
                  <p className="text-base tracking-wider mb-6 text-gray-500">Chúng tôi giúp người bán định giá chính xác và người mua an tâm chọn xe chất lượng. Mỗi giao dịch không chỉ là mua bán, mà còn là trao đổi niềm tin. Hãy để chúng tôi đồng hành, để mọi hành trình khởi đầu bằng sự an tâm!</p>
                  <a href="#" className="bg-[rgb(72,181,25)] text-white px-6 py-4 rounded-lg drop-shadow-lg shadow-lg font-bold transition duration-300">XE ĐÃ ĐƯỢC KIỂM TRA</a>
                </div>
              </div>
            </div>
            <div className=" max-w-7xl mx-auto pt-7 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                <div className="bg-gray-100 p-6 rounded-lg  flex items-center justify-center text-center">
                  <div className="flex-shrink-0  rounded-full flex items-center justify-center">
                    <img className="w-16 h-16" src="./car-1.svg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Không có tai nạn lớn</h3>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg  flex items-center justify-center text-center">
                  <div className="flex-shrink-0  rounded-full flex items-center justify-center">
                    <img className="w-16 h-16" src="./car-2.svg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Không có thiệt hại do lũ lụt</h3>
                  </div>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center text-center">
                  <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center">
                    <img className="w-16 h-16" src="./car-3.svg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Không có hư hỏng khung</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="-my-14 py-32 bg-white w-full ">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 underline-left">An toàn mua xe cùng với chúng tôi</h2>

                <p className="text-base mb-6 text-gray-500 tracking-wider">Quy trình kiểm tra 175 điểm của chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn, đảm bảo loại trừ xe từng gặp tai nạn lớn hoặc hư hỏng do ngập nước. Mọi chiếc xe đều được đánh giá kỹ lưỡng để đáp ứng đầy đủ yêu cầu an toàn và chất lượng.</p>
                <a href="/inspection-list" className="flex items-center text-[rgb(15,101,35)] font-bold">
                  Xem danh sách kiểm tra xe
                  <img src="./send.svg" className="h-6 w-6 ml-2" />
                </a>

              </div>
              <div className="md:w-2/3 px-4">
                <img src="./car-care.svg" alt="Car Diagram" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-[2fr_1fr] lg:gap-x-24">
              <div className="w-full">
                <img className="w-full mx-auto" src="./car-mind.svg" alt="" />
              </div>

              <div className="text-center lg:text-left tracking-wider">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl underline-left">An tâm cùng Đối tác DiCar</h2>
                <p className="mt-6 text-base text-gray-500">Chúng tôi không chỉ kiểm tra, chúng tôi mang đến sự an tâm! &quot;DiCar tin rằng, mỗi giao dịch không chỉ là mua bán, mà còn là sự trao đổi của niềm tin và giá trị thực. Hãy để chúng tôi đồng hành cùng bạn, để mỗi hành trình đều bắt đầu bằng sự an tâm tuyệt đối&quot;</p>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto leading-10">
          <div className=" mb-12">
            <div className="max-w-7xl mx-auto my-0 pt-7 px-5">
              <h2 className="text-center text-4xl font-bold text-gray-900 mb-4 custom-underline tracking-wide">Xe đã qua kiểm tra 175 điểm</h2>
              <div className="flex justify-between gap-4">
                <div className="relative flex w-80 flex-col bg-gray-100 bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 mt-4">
                    <div className="h-40 relative rounded-xl bg-blue-gray-500 bg-clip-border text-white bg-white overflow-visible">
                      <img src="./tag-price.svg" className="absolute top-0 left-0 -ml-7" />
                      <span className="absolute top-2 left-2 text-white font-semibold text-sm px-2 py-1 rounded-md">
                        Giá:
                      </span>
                    </div>
                    <div className="w-2/3 h-1 bg-[rgb(72,181,25)] mt-[-1px] rounded-2xl"></div>
                  </div>
                  <div className="px-6">
                    <ul className="mt-6 space-y-2 mb-6 list-disc pl-5">
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Tên xe</li>
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Dòng xe</li>
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Số km - Tự động/ Sàn</li>
                    </ul>
                  </div>
                  <div className="">
                    <button className="h-12 w-2/3 select-none rounded-r-3xl bg-[rgb(72,181,25)] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                      Xem chi tiết
                    </button>
                  </div>
                </div>

                <div className="relative flex w-80 flex-col bg-gray-100 bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 mt-4">
                    <div className="h-40 relative rounded-xl bg-blue-gray-500 bg-clip-border text-white bg-white overflow-visible">
                      <img src="./tag-price.svg" className="absolute top-0 left-0 -ml-7" />
                      <span className="absolute top-2 left-2 text-white font-semibold text-sm px-2 py-1 rounded-md">
                        Giá:
                      </span>
                    </div>
                    <div className="w-2/3 h-1 bg-[rgb(72,181,25)] mt-[-1px] rounded-2xl"></div>
                  </div>
                  <div className="px-6">
                    <ul className="mt-6 space-y-2 mb-6 list-disc pl-5">
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Tên xe</li>
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Dòng xe</li>
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Số km - Tự động/ Sàn</li>
                    </ul>
                  </div>
                  <div className="">
                    <button className="h-12 w-2/3 select-none rounded-r-3xl bg-[rgb(72,181,25)] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                      Xem chi tiết
                    </button>
                  </div>
                </div>

                <div className="relative flex w-80 flex-col bg-gray-100 bg-clip-border text-gray-700 shadow-md">
                  <div className="relative mx-4 mt-4">
                    <div className="h-40 relative rounded-xl bg-blue-gray-500 bg-clip-border text-white bg-white overflow-visible">
                      <img src="./tag-price.svg" className="absolute top-0 left-0 -ml-7" />
                      <span className="absolute top-2 left-2 text-white font-semibold text-sm px-2 py-1 rounded-md">
                        Giá:
                      </span>
                    </div>
                    <div className="w-2/3 h-1 bg-[rgb(72,181,25)] mt-[-1px] rounded-2xl"></div>
                  </div>
                  <div className="px-6">
                    <ul className="mt-6 space-y-2 mb-6 list-disc pl-5">
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Tên xe</li>
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Dòng xe</li>
                      <li className="font-sans text-base font-light leading-relaxed text-inherit antialiased transition-all duration-200">Số km - Tự động/ Sàn</li>
                    </ul>
                  </div>
                  <div className="">
                    <button className="h-12 w-2/3 select-none rounded-r-3xl bg-[rgb(72,181,25)] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <section className="pt-10 bg-[rgb(15,101,35)]  text-white  tracking-wider">
          <div className="max-w-7xl mx-auto ">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-xl font-bold mb-4 underline-left-white">Mua bán xe tự tin với Dicar Check: Lựa chọn đúng đắn</h2>
                <ul className="mt-6 space-y-2 mb-6 list-disc pl-5">
                  <li className="text-sm text-white transition-all duration-200">Đảm bảo minh bạch</li>
                  <li className="text-sm text-white transition-all duration-200" >Giúp quyết định chính xác</li>
                  <li className="text-sm text-white transition-all duration-200">Tiết kiệm thời gian và chi phí</li>
                  <li className="text-sm text-white transition-all duration-200">Tăng giá trị giao dịch</li>
                </ul>
                <a href="#" className="bg-[rgb(72,181,25)] px-6 py-3 rounded shadow-lg font-bold transition duration-300">XE ĐÃ ĐƯỢC KIỂM TRA</a>
              </div>


              <div className="md:w-1/2 px-4">
                <img src="./car-calendar.svg" alt="Car Diagram" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
      </div>

    </>

  );
}
