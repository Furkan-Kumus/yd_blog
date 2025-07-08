import React, { useState, useEffect } from "react"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Team = () => {
  const [inputs, setInputs] = useState({
    year: '',
    metrekare: '',
    constructionDuration: '',
    buildingGroup: '',
    kdvRate: ''
  })
  
  const [results, setResults] = useState({
    baseCost: 0,
    kdvAmount: 0,
    totalCost: 0
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs(prev => ({
      ...prev,
      [name]: value
    }))
  }

  useEffect(() => {
    const metrekare = parseFloat(inputs.metrekare.replace(',', '.')) || 0
    const kdvRate = parseFloat(inputs.kdvRate) || 0
    const year = inputs.year
    const buildingGroup = inputs.buildingGroup
    const constructionDuration = parseFloat(inputs.constructionDuration) || 1
    
    // Base unit price calculation based on year and building group
    let baseUnitPrice = 2500 // Default base price per m²
    
    // Year-based price adjustments
    const yearPrices = {
      '2019': 2200,
      '2020': 2400,
      '2021': 2600,
      '2022': 2800,
      '2023': 3200,
      '2024': 3500,
      '2025/1': 3800,
      '2025/2': 4000
    }
    
    if (year && yearPrices[year]) {
      baseUnitPrice = yearPrices[year]
    }
    
    // Building group multipliers
    const groupMultipliers = {
      '1/A': 1.0,
      '1/B': 1.1,
      '2/A': 1.2,
      '2/B': 1.3,
      '3/A': 1.4,
      '3/B': 1.5,
      '4/A': 1.6,
      '4/B': 1.7,
      '5/A': 1.8,
      '5/B': 2.0
    }
    
    if (buildingGroup && groupMultipliers[buildingGroup]) {
      baseUnitPrice *= groupMultipliers[buildingGroup]
    }
    
    // Construction duration adjustment (longer projects get slight discount)
    const durationDiscount = Math.max(0, (constructionDuration - 1) * 0.02) // 2% discount per additional year
    baseUnitPrice *= (1 - durationDiscount)
    
    const baseCost = metrekare * baseUnitPrice
    const kdvAmount = (baseCost * kdvRate) / 100
    const totalCost = baseCost + kdvAmount

    setResults({
      baseCost: baseCost.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      kdvAmount: kdvAmount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      totalCost: totalCost.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    })
  }, [inputs])

  // Component mount/unmount'da body class'ı ekle/kaldır
  useEffect(() => {
    document.body.classList.add('calculator-page')
    return () => {
      document.body.classList.remove('calculator-page')
    }
  }, [])

  return (
    <>
      <section className='calculator-hero'>
        <div className='container'>
          <div className='hero-content'>
            <h1>Yapı Hesaplayıcı</h1>
            <p>Profesyonel inşaat hesaplamalarınızı hızlı ve doğru şekilde yapın</p>
          </div>
        </div>
      </section>
      
      <section className='calculator-section'>
        <div className='container'>
          <div className='calculator-wrapper'>
            <div className='calculator-content flexSB'>
              <div className='inputs-section'>
                <h3>Yapı Bilgileri</h3>
                
                <div className='input-group'>
                  <label>Yıl</label>
                  <select
                    name="year"
                    value={inputs.year}
                    onChange={handleInputChange}
                  >
                    <option value="">Yıl seçin</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025/1">2025/1</option>
                    <option value="2025/2">2025/2</option>
                  </select>
                </div>
                
                <div className='input-group'>
                  <label>Metrekare (m²)</label>
                  <input
                    type="text"
                    name="metrekare"
                    value={inputs.metrekare}
                    onChange={handleInputChange}
                    placeholder="Örn: 120,50"
                  />
                  <small>Virgül ile ondalık sayı girebilirsiniz</small>
                </div>
                
                <div className='input-group'>
                  <label>İnşaat Süresi</label>
                  <select
                    name="constructionDuration"
                    value={inputs.constructionDuration}
                    onChange={handleInputChange}
                  >
                    <option value="">Süre seçin</option>
                    <option value="1">1 Yıl</option>
                    <option value="2">2 Yıl</option>
                    <option value="3">3 Yıl</option>
                    <option value="4">4 Yıl</option>
                    <option value="5">5 Yıl</option>
                  </select>
                </div>
                
                <div className='input-group'>
                  <label>Yapı Grubu</label>
                  <select
                    name="buildingGroup"
                    value={inputs.buildingGroup}
                    onChange={handleInputChange}
                  >
                    <option value="">Seçiniz</option>
                    <optgroup label="Grup 1">
                      <option value="1/A">1/A</option>
                      <option value="1/B">1/B</option>
                      <option value="1/C">1/C</option>
                      <option value="1/D">1/D</option>
                      <option value="2/A">2/A</option>
                      <option value="2/B">2/B</option>
                      <option value="2/C">2/C</option>
                    </optgroup>
                    <optgroup label="Grup 2">
                      <option value="3/A">3/A</option>
                      <option value="3/B">3/B</option>
                      <option value="3/C">3/C</option>
                    </optgroup>
                    <optgroup label="Grup 3">
                      <option value="4/A">4/A</option>
                      <option value="4/B">4/B</option>
                      <option value="4/C">4/C</option>
                      <option value="5/A">5/A</option>
                      <option value="5/B">5/B</option>
                      <option value="5/C">5/C</option>
                      <option value="5/D">5/D</option>
                      <option value="5/E">5/E</option>
                    </optgroup>
                  </select>
                </div>
                
                <div className='input-group'>
                  <label>KDV Oranı</label>
                  <select
                    name="kdvRate"
                    value={inputs.kdvRate}
                    onChange={handleInputChange}
                  >
                    <option value="">KDV oranı seçin</option>
                    <option value="2">Tevkifatlı %2</option>
                    <option value="20">Tevkifatsız %20</option>
                  </select>
                </div>
              </div>
              
              <div className='results-section'>
                <h3>Hesaplama Sonuçları</h3>
                <div className='result-item'>
                  <span className='result-label'>Seçilen Yıl:</span>
                  <span className='result-value'>{inputs.year || 'Seçilmedi'}</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>Metrekare:</span>
                  <span className='result-value'>{inputs.metrekare || '0'} m²</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>İnşaat Süresi:</span>
                  <span className='result-value'>{inputs.constructionDuration ? `${inputs.constructionDuration} Yıl` : 'Seçilmedi'}</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>Yapı Grubu:</span>
                  <span className='result-value'>{inputs.buildingGroup || 'Seçilmedi'}</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>Temel Maliyet:</span>
                  <span className='result-value'>{results.baseCost} ₺</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>KDV Tutarı ({inputs.kdvRate ? `%${inputs.kdvRate}` : '%0'}):</span>
                  <span className='result-value'>{results.kdvAmount} ₺</span>
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
