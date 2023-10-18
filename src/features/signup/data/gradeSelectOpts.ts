import SelectOption from '@@/features/form/types/SelectOption'

// 🌐 学年選択セレクトオプション
type GradeSelectOption = SelectOption

// 🌐 学年選択セレクトオプション一覧
const gradeSelectOpts: GradeSelectOption[] = [
  { label: '1年', value: 1 },
  { label: '2年', value: 2 },
  { label: '3年', value: 3 },
  { label: '4年', value: 4 },
]

export default gradeSelectOpts
