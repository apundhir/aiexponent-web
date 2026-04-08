import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AiExponent — Building AI that deserves to be trusted'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A1628',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              background: '#C9A84C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 900,
              color: '#0A1628',
            }}
          >
            Ai
          </div>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#FAF7F2',
            }}
          >
            AiExponent
          </span>
        </div>
        <div
          style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#FAF7F2',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: '900px',
          }}
        >
          Building AI that deserves to be trusted.
        </div>
        <div
          style={{
            fontSize: '22px',
            color: '#A0AABB',
            marginTop: '24px',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Open source tools and enterprise products for AI governance
        </div>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              padding: '8px 20px',
              borderRadius: '6px',
              border: '1.5px solid rgba(201, 168, 76, 0.4)',
              color: '#C9A84C',
              fontSize: '16px',
            }}
          >
            EU AI Act Compliance
          </div>
          <div
            style={{
              padding: '8px 20px',
              borderRadius: '6px',
              border: '1.5px solid rgba(74, 111, 165, 0.4)',
              color: '#4A6FA5',
              fontSize: '16px',
            }}
          >
            6 Open Source Tools
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
