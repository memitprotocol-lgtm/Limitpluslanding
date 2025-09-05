import Image from 'next/image'

export function BondLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: { fontSize: 'text-2xl', letterSpacing: 'tracking-wider' },
    md: { fontSize: 'text-4xl', letterSpacing: 'tracking-wider' },
    lg: { fontSize: 'text-6xl', letterSpacing: 'tracking-wider' },
  }

  const currentSize = sizes[size]

  return (
    <div className="flex items-center">
      <div className={`${currentSize.fontSize} font-black text-gray-900 ${currentSize.letterSpacing} flex items-center`}>
        <span>B</span>
        <span className="relative inline-flex items-center justify-center mx-1 align-middle" style={{ width: '1em', height: '1em' }}>
          {/* Heart SVG replacing the O; scales with font size via 1em wrapper */}
          <Image src="/heart-logo.svg" alt="Heart" fill className="object-contain" priority />
        </span>
        <span>ND</span>
      </div>
    </div>
  )
}
