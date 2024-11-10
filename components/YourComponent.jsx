import Image from 'next/image'

export default function YourComponent() {
  return (
    <section className="photos-section">
      <Image
        src="/images/your-photo.jpg"
        alt="Описание фото"
        width={500}
        height={300}
        priority
      />
    </section>
  )
} 