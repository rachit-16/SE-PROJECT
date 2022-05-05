import React from 'react'
import AlgorithmDescriber from '../../AlgorithmDescriber/AlgorithmDescriber'

const searchingAlgorithmsAbout = () => {
  const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore modi cum
aut, odio totam a adipisci sequi perferendis officia ea id quam voluptas?
Numquam nobis rerum corporis iure fugiat, magnam officiis, quibusdam
similique officia omnis repellat adipisci vero odio doloribus unde iste
nam hic quae natus vel? Magnam, totam aspernatur! Possimus dignissimos
quidem cumque, quam laboriosam nemo ut et ullam fuga fugiat quisquam vel
sapiente, sit deleniti amet. Rem dignissimos sint quaerat vitae. Placeat
repudiandae accusantium error pariatur tempora, iusto ad blanditiis.
Similique dolores quam itaque quod voluptas reprehenderit voluptatum iste
soluta fuga tempore a impedit ex labore nostrum, deserunt, quos omnis
ducimus ullam error qui at illum reiciendis quas perspiciatis! Sed,
obcaecati sunt cupiditate iste ex adipisci, quisquam id asperiores natus
eveniet harum fugiat, amet fugit quibusdam perspiciatis quas ipsa. Libero
eligendi odit neque iusto! Veritatis recusandae doloribus assumenda quia
esse quo natus reiciendis! Harum et soluta perspiciatis quasi?`

  const heading = 'Searching Algorithms'
  const v1="BinarySearch"
  const v2="LinearSearch"

  return (
    <AlgorithmDescriber
    show="true"
      visualizer="/searching/binarySearch"
      topic="/searching/problems"
      heading={heading}
      content={content}
      v1={v1}
      v2={v2}
    />
  )
}

export default searchingAlgorithmsAbout
