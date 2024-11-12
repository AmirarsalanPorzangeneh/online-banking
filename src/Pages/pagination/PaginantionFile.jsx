import React from "react";
import { Pagination } from "antd";


export default function PaginationFile({
  total,
  pageSize,
  currentPage,
  onChange,
  className,
}) {
  return (
    <div style={{ direction: "ltr" }} className="flex justify-center">
      <Pagination
        total={total}
        pageSize={pageSize}
        current={currentPage}
        showSizeChanger={false}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}
