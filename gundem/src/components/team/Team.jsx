import React, { useState, useEffect } from "react"
import Back from "../common/back/Back"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Team = () => {
  const [inputs, setInputs] = useState({
    length: '',
    width: '',
    height: '',
    unitPrice: '',
    floorCount: ''
  })
  
  const [results, setResults] = useState({
    area: 0,
    volume: 0,
    totalArea: 0,
    totalCost: 0,
    perimeter: 0
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    const length = parseFloat(inputs.length) || 0
    const width = parseFloat(inputs.width) || 0
    const height = parseFloat(inputs.height) || 0
    const unitPrice = parseFloat(inputs.unitPrice) || 0
    const floorCount = parseFloat(inputs.floorCount) || 1

    const area = length * width
    const volume = area * height
    const totalArea = area * floorCount
    const totalCost = totalArea * unitPrice
    const perimeter = 2 * (length + width)

    setResults({
      area: area.toFixed(2),
      volume: volume.toFixed(2),
      totalArea: totalArea.toFixed(2),
      totalCost: totalCost.toFixed(2),
      perimeter: perimeter.toFixed(2)
    })
  }, [inputs])

  return (
    <>
      <Back title='Yapı Hesaplayıcı' />
      <section className='calculator-section padding'>
        <div className='container'>
          <div className='calculator-wrapper'>
            <div className='calculator-title'>
              <h2>İnşaat Hesaplayıcı</h2>
              <p>Yapı denetim hesaplamalarınızı kolayca yapın</p>
            </div>
            
            <div className='calculator-content flexSB'>
              <div className='inputs-section'>
                <h3>Ölçüler ve Bilgiler</h3>
                <div className='input-group'>
                  <label>Uzunluk (m)</label>
                  <input
                    type="number"
                    name="length"
                    value={inputs.length}
                    onChange={handleInputChange}
                    placeholder="Uzunluk girin"
                  />
                </div>
                
                <div className='input-group'>
                  <label>Genişlik (m)</label>
                  <input
                    type="number"
                    name="width"
                    value={inputs.width}
                    onChange={handleInputChange}
                    placeholder="Genişlik girin"
                  />
                </div>
                
                <div className='input-group'>
                  <label>Yükseklik (m)</label>
                  <input
                    type="number"
                    name="height"
                    value={inputs.height}
                    onChange={handleInputChange}
                    placeholder="Yükseklik girin"
                  />
                </div>
                
                <div className='input-group'>
                  <label>Birim Fiyat (₺/m²)</label>
                  <input
                    type="number"
                    name="unitPrice"
                    value={inputs.unitPrice}
                    onChange={handleInputChange}
                    placeholder="M² başına fiyat"
                  />
                </div>
                
                <div className='input-group'>
                  <label>Kat Sayısı</label>
                  <input
                    type="number"
                    name="floorCount"
                    value={inputs.floorCount}
                    onChange={handleInputChange}
                    placeholder="Toplam kat sayısı"
                  />
                </div>
              </div>
              
              <div className='results-section'>
                <h3>Hesaplama Sonuçları</h3>
                <div className='result-item'>
                  <span className='result-label'>Kat Alanı:</span>
                  <span className='result-value'>{results.area} m²</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>Hacim:</span>
                  <span className='result-value'>{results.volume} m³</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>Toplam Alan:</span>
                  <span className='result-value'>{results.totalArea} m²</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>Çevre:</span>
                  <span className='result-value'>{results.perimeter} m</span>
                </div>
                
                <div className='result-item total-cost'>
                  <span className='result-label'>Toplam Maliyet:</span>
                  <span className='result-value'>{results.totalCost} ₺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
