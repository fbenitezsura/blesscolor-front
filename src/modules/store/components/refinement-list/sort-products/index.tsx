import FilterRadioGroup from "@modules/common/components/filter-radio-group"
import { ChangeEvent } from "react"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setSortBy: (value: string) => void
}

const sortOptions = [
  {
    value: "created_at",
    label: "Ultimos en llegar",
  },
  {
    value: "price_asc",
    label: "Precio Menor",
  },
  {
    value: "price_desc",
    label: "Precio Mayor",
  },
]

const SortProducts = ({ sortBy, setSortBy }: SortProductsProps) => {
  const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
    setSortBy(e.target.value)
  }

  return (
    <FilterRadioGroup
      title="Ordenar por:"
      items={sortOptions}
      value={sortBy}
      handleChange={handleChange}
    />
  )
}

export default SortProducts
