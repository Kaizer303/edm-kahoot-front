import { csPrajad, superstore } from '@/fonts'

const ExampleFont: React.FC = () => {
  return (
    <div style={{ fontSize: 24 }}>
      {/* Wrap with font classname */}
      <div className={superstore.className}>
        <div style={{ fontWeight: 200, fontStyle: 'normal' }}>
          ทดสอบ Superstore Light
        </div>
        <div style={{ fontWeight: 300, fontStyle: 'normal' }}>
          ทดสอบ Superstore Book
        </div>
        <div style={{ fontWeight: 300, fontStyle: 'italic' }}>
          ทดสอบ Superstore Book Italic
        </div>
        <div style={{ fontWeight: 400, fontStyle: 'normal' }}>
          ทดสอบ Superstore Regular
        </div>
        <div style={{ fontWeight: 400, fontStyle: 'italic' }}>
          ทดสอบ Superstore Italic
        </div>
        <div style={{ fontWeight: 500, fontStyle: 'bold' }}>
          ทดสอบ Superstore Bold
        </div>
        <div style={{ fontWeight: 500, fontStyle: 'italic' }}>
          ทดสอบ Superstore Bold Italic
        </div>
      </div>
      {/* Use font family style */}
      <div>
        <div style={{ fontFamily: csPrajad.style.fontFamily, fontWeight: 400, fontStyle: 'normal' }}>
          ทดสอบ CS Prajad
        </div>
        <div style={{ fontFamily: csPrajad.style.fontFamily, fontWeight: 400, fontStyle: 'italic' }}>
          ทดสอบ CS Prajad Italic
        </div>
        <div style={{ fontFamily: csPrajad.style.fontFamily, fontWeight: 500, fontStyle: 'bold' }}>
          ทดสอบ CS Prajad Bold
        </div>
        <div style={{ fontFamily: csPrajad.style.fontFamily, fontWeight: 500, fontStyle: 'italic' }}>
          ทดสอบ CS Prajad Bold Italic
        </div>
      </div>
    </div>
  )
}

export default ExampleFont