export default function Footer() {
    return (
        <footer className="py-10 bg-[rgb(2,62,33)] text-white ">
            <div className="mx-auto max-w-7xl ">
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="row-span-5">
                        <img className="mb-4 w-full" src="./logo.svg" />
                        <p className="text-sm leading-relaxed text-gray-400 mt-7 mb-4">DiCar Check là dịch vụ giám định xe ô tô chuyên nghiệp, cung cấp thông tin chi tiết về tình trạng kỹ thuật của xe. Từ động cơ, hộp số đến hệ thống điện, khung gầm, DiCar Check đảm bảo rằng bạn nhận được đánh giá chi tiết và khách quan nhất.
                        </p>
                    </div>
                    <div className="col-span-4 row-span-5 px-8 leading-3 tracking-tight">
                        <h2 className="text-xl font-bold">Đăng ký nhận thông tin của chúng tôi</h2>
                        <div className="flex w-full md:justify-start justify-center items-end mt-4">
                            <div className="relative w-1/3">
                                <input type="email" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-ye-50 rounded-e rounded rounded-s-2 border border-yellow-500" placeholder="Email" required />
                                <button type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-yellow-500 rounded-e-lg border border-yellow-500">
                                    Gửi
                                </button>
                            </div>

                        </div>


                        <div className="w-full mt-8">
                            <div className="grid grid-cols-1 lg:grid-cols-8 gap-6">
                                <div className="lg:col-span-2">
                                    <p className="text-sm text-gray-400">Dịch vụ</p>
                                    <ul className="mt-6 space-y-2">
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Mua xe</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Bán xe</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Trao đổi</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200">Kiểm định xe</a></li>
                                    </ul>
                                </div>
                                <div className="lg:col-span-2">
                                    <p className="text-sm text-gray-400">Hỗ trợ</p>
                                    <ul className="mt-6 space-y-2">
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Bảo hiểm</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Tài chính</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Câu hỏi thường gặp</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Đối tác gần bạn</a></li>

                                    </ul>
                                </div>
                                <div className="lg:col-span-2">
                                    <p className="text-sm text-gray-400">Về DiCar Check</p>
                                    <ul className="mt-6 space-y-2">
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Hành trình DiCar</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Bài viết</a></li>
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Đánh giá</a></li>

                                    </ul>
                                </div>
                                <div className="lg:col-span-2">
                                    <p className="text-sm text-gray-400">Liên hệ</p>
                                    <ul className="mt-6 space-y-2">
                                        <li><a href="#" title="" className="flex text-sm text-white transition-all duration-200 ">Hotline: 0932 098 148</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )

}