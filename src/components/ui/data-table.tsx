"use client"

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {Button} from "@/components/ui/button.tsx";
import {IoCaretBack, IoCaretForward} from "react-icons/io5";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  totalExercises: number;
}

export function DataTable<TData, TValue>(
  {
    columns,
    data,
    page,
    setPage,
    totalPages,
    totalExercises,
  }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages,
  });

  return (
    <div className="flex flex-col h-full justify-between">
      <Table>
        <TableHeader className="bg-[#F5F5F5]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No se encontraron resultados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex w-full justify-between items-center">
        <p className="text-xs text-gray-500">Resultado: {totalExercises} ejercicios encontrados</p>
        <div className="flex items-center justify-end space-x-4 py-4">
          <Button size="icon" onClick={() => setPage(page - 1)} disabled={page <= 1}>
            <IoCaretBack />
          </Button>
          <span className="text-sm text-muted-foreground">
          Página <strong>{page} de {totalPages}</strong>
        </span>
          <Button size="icon" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
            <IoCaretForward />
          </Button>
        </div>
      </div>
    </div>
  )
}
