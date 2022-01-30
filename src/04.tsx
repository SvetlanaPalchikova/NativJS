const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90
}
// const oldAges = ages.filter(predicate)
// const oldAges = [100]; //>90
type CourseType = {
    title: string
    price: number
}
//  чтобы упростить запись убираем return и прописываем условия в filtr
const oldAges = ages.filter(age => age > 90)

const courses = [
    {title: "css", price: 100},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]
//  const chipPredicate = (course: CourseType)=>{
//  return course.price<160;
//  }              эту функцию можно записать короче без return

//и мы эту фукцию засовываем в метод filtr
const chipCourses=courses.filter(course=>course.price<160);
// const chipCourses = [
//     {title: "css", price: 100},
//     {title: "REACT", price: 150}
// ]
//



