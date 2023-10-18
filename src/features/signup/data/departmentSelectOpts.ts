import SelectOption from '@@/features/form/types/SelectOption'

// 🌐 学科選択セレクトオプション
type DepartmentSelectOption = SelectOption & {
  maxGrade: number
}

// 🌐 学科選択セレクトオプション一覧
const departmentSelectOpts: DepartmentSelectOption[] = [
  { label: '情報工学科', value: 1, maxGrade: 4 },
  { label: '情報システム専攻科', value: 2, maxGrade: 3 },
  { label: '情報システム専攻科 : アドバンス', value: 3, maxGrade: 3 },
  { label: '情報システム科', value: 4, maxGrade: 2 },
  { label: '情報システム科 : アドバンス', value: 5, maxGrade: 2 },
]

export default departmentSelectOpts
