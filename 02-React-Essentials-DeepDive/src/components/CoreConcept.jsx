// We can use object destructing use CoreConcept({})
export default function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}