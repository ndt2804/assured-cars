"use client";
import { useState } from "react";
import { inspectionData, tabImages } from "../constants";

export default function Header() {
    const [selectedTab, setSelectedTab] = useState('Nội thất');
    const handleSelect = (tab) => {
        setSelectedTab(tab);
    };
    const selectedData = inspectionData[selectedTab];

    const [currentIndex, setCurrentIndex] = useState(0);
    const tabsPerPage = 4;
    const totalTabs = Object.keys(inspectionData).length;
    const allData = Object.keys(inspectionData).map((tabKey) => ({
        tabKey,
        image: tabImages[tabKey],
    }));
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    const startIndex = currentIndex;
    const displayedTabs = allData.slice(startIndex, startIndex + tabsPerPage);

    return (
        <>


            <section className="container max-w-6xl mx-auto text-gray-700">
                <div className="pt-7">
                    <div className="content-wrapper flex justify-between items-center">
                        <h2 className="font-black text-gray-700 dark:text-slate-200">
                            175-POINT INSPECTION
                        </h2>
                        <img className="" src="./logo.svg" />
                    </div>
                </div>
                <hr className=" w-full border-gray-200" />
                <section className="text-gray-700 body-font">
                    <div className="px-5 mx-auto my-6">
                        <div className="relative">
                            <div className="flex overflow-hidden">
                                {displayedTabs.map((tab) => (
                                    <div
                                        key={tab.tabKey}
                                        onClick={() => handleSelect(tab.tabKey)}
                                        className={`w-full sm:w-1/4 px-8 py-6 border-r-2 border-gray-200 border-opacity-60 flex flex-col items-center gap-2 bg-white text-center dark:bg-slate-900`}
                                    >
                                        <img
                                            src={tab.tabKey === 'Khoang động cơ'
                                                ? tabImages['Khoang động cơ']
                                                : (selectedTab === tab.tabKey
                                                    ? tabImages[tab.tabKey].selected
                                                    : tabImages[tab.tabKey].unselected)
                                            }
                                            alt={`${tab.tabKey} icon`}
                                            className={`${tab.tabKey === 'Ngoại thất' ? 'w-24 mt-8' : 'w-16 h-16 '}`}
                                        />
                                        <span className={`block font-bold ${selectedTab === tab.tabKey ? 'text-[rgb(15,101,35)] ' : 'text-transparent'}`}>
                                            {tab.tabKey}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4">
                                {totalTabs > tabsPerPage && (
                                    <>
                                        <button
                                            onClick={() => goToSlide(0)}
                                            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === 0 ? 'bg-gray-700' : 'bg-gray-300'
                                                } focus:outline-none`}
                                        ></button>
                                        <button
                                            onClick={() => goToSlide(1)}
                                            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === 1 ? 'bg-gray-700' : 'bg-gray-300'
                                                } focus:outline-none`}
                                        ></button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bg-white mb-24  font-bold text-gray-700">
                    {selectedData.map(category => {
                        const midIndex = Math.ceil(category.items.length / 2);
                        const leftColumnItems = category.items.slice(0, midIndex);
                        const rightColumnItems = category.items.slice(midIndex);
                        return (
                            <div key={category.category} className="bg-white">
                                < h2 className="text-xl  px-4 py-4 bg-gray-200 text-center text-[rgb(15,101,35)]" > {category.category}</h2>
                                <div className="grid grid-cols-2 gap-4 border  text-white">
                                    <div className="pr-6 text-sm ">
                                        {leftColumnItems.map(item => (
                                            <ul key={item.STT} className="">
                                                <li className="border-b bg-[rgb(15,101,35)]">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 border-r border-l px-4 py-3">
                                                            <p className="text-sm  truncate dark:text-white text-center">
                                                                {item.STT}
                                                            </p>
                                                        </div>
                                                        <div className="flex-1 min-w-0 border-r px-4 py-3">
                                                            <p className="text-sm   truncate dark:text-white">
                                                                {item.title}
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center  dark:text-white border-r px-4 py-3 ml-auto">
                                                            <img height={32} width={32} src="/done.svg" alt="done" />
                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>

                                    <div>
                                        {rightColumnItems.map(item => (
                                            <ul key={item.STT} className="">
                                                <li className="border-b text-sm font-bold bg-[rgb(15,101,35)]">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 border-r border-l px-4 py-3">
                                                            <p className="text-sm   truncate dark:text-white text-center">
                                                                {item.STT}
                                                            </p>
                                                        </div>
                                                        <div className="flex-1 min-w-0 border-r px-4 py-3">
                                                            <p className="text-sm   truncate dark:text-white">
                                                                {item.title}
                                                            </p>
                                                        </div>
                                                        <div className="inline-flex items-center  dark:text-white border-r px-4 py-3">
                                                            <img height={32} width={32} src="/done.svg" alt="done" />

                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div >
            </section >


        </>


    )
}
