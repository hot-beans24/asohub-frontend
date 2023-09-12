export type SelectOption = {
  label: string
  value: string | number
}

export type DepartmentSelectOption = SelectOption & {
  maxGrade: number
}

export const departmentSelectOpts: DepartmentSelectOption[] = [
  { label: '情報工学科', value: 1, maxGrade: 4 },
  { label: '情報システム専攻科', value: 2, maxGrade: 3 },
  { label: '情報システム専攻科 : アドバンス', value: 3, maxGrade: 3 },
  { label: '情報システム科', value: 4, maxGrade: 2 },
  { label: '情報システム科 : アドバンス', value: 5, maxGrade: 2 }
]

export const gradeSelectOpts: SelectOption[] = [
  { label: '1年', value: 1 },
  { label: '2年', value: 2 },
  { label: '3年', value: 3 },
  { label: '4年', value: 4 }
]
