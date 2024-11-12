import React, { useState } from "react";
import CustomDate from "../../Components/CustomDate/CustomDate";
import { useForm } from "react-hook-form";
import { Button } from "antd";
// import AccountList from "../../Components/AccountList/AccountList";
import PaginationFile from "../pagination/PaginantionFile";
import AccountData from "../../Data/Data";

export default function Report() {
  const { control } = useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  // Paginate data for the current page
  const paginatedData = AccountData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div className="bg-slate-700 w-[480px] h-[564px] px-8 py-10">
        <h2 className="text-white font-bold text-2xl">گزارش مالی</h2>
        <CustomDate
          name="date"
          control={control}
          placeholder="انتخاب محدوده تاریخ"
          className={'mt-8'}
        />
        <Button type="primary" className="w-5/6 flex mx-auto mt-6 mb-12 py-5">
          تایید
        </Button>

        {/* Pass paginated data to AccountList */}
        {/* <AccountList data={paginatedData} /> */}
        {/* Render paginated data */}
        <ul className="mt-6">
          {paginatedData.map((item) => (
            <li
              key={item.key}
              className="flex items-end justify-between  bg-gray-600 text-white p-4 mb-2 rounded"
            >
              <span>{item.date}</span>
              <span>{item.amount}</span>
              <span className="">{item.statusIcon}{item.status}</span>
              <span></span>
            </li>
          ))}
        </ul>

        {/* Pagination component with change handlers */}
        <PaginationFile
          total={AccountData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onChange={(page) => setCurrentPage(page)}
          className={"border mt-10"}
        />
        <p className="flex justify-center mt-6 text-white">نمایش ۱ تا ۳ از ۸ مورد</p>
      </div>
    </div>
  );
}
