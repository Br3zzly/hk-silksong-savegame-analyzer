import type { ReactNode } from "react";

interface TableCell<T = unknown> {
  header?: string;
  width?: string;
  // static or dynamic class for the td cell; function receives the row item
  cellClassName?: string | ((item: T) => string);
  headerClassName?: string;
  renderCell?: (item: T, rowIndex: number) => ReactNode;
}

interface TableProps<T = unknown> {
  columns: TableCell<T>[];
  tableData?: T[];
  rowClassName?: string | ((item: T, rowIndex: number) => string);
  rowTitle?: string | ((item: T, rowIndex: number) => string | undefined);
  children?: ReactNode;
  isFixedLayout?: boolean;
}

export function Table<T = unknown>({
  columns,
  tableData,
  rowClassName,
  rowTitle,
  children,
  isFixedLayout = false,
}: TableProps<T>) {
  const getTableBody = () => {
    if (!Array.isArray(tableData)) {
      return children;
    }
    return tableData.map((rowItem, rowIndex) => (
      <tr
        key={rowIndex}
        className={typeof rowClassName === "function" ? rowClassName(rowItem, rowIndex) : rowClassName || ""}
        title={typeof rowTitle === "function" ? rowTitle(rowItem, rowIndex) : rowTitle}
      >
        {columns.map((column, colIndex) => {
          let cellClass = "px-2 py-1 truncate group-hover:whitespace-normal group-hover:break-words";
          if (typeof column.cellClassName === "function") {
            cellClass += " " + column.cellClassName(rowItem);
          } else {
            cellClass += " " + (column.cellClassName || "");
          }

          return (
            <td key={colIndex} className={cellClass}>
              {column.renderCell ? column.renderCell(rowItem, rowIndex) : null}
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <table className={`w-full border-collapse ${isFixedLayout ? "table-fixed" : "table-auto"}`}>
      {isFixedLayout && (
        <colgroup>
          {columns.map((column, index) => (
            <col key={index} style={column.width ? { width: column.width } : undefined} />
          ))}
        </colgroup>
      )}
      <thead className="bg-transparent">
        <tr className="text-left border-b border-gray-600">
          {columns.map((column, index) => (
            <th key={index} className={column.headerClassName || "px-2 py-3 text-gray-300 font-medium"}>
              {column.header || ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{getTableBody()}</tbody>
    </table>
  );
}

export type { TableCell, TableProps };
