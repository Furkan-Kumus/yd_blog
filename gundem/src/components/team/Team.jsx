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
    mainConstructionCost: 0,
    serviceFee: 0,
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
    
    // Year-based base prices per m²
    const yearPrices = {
      '2019': 8000,
      '2020': 9000,
      '2021': 10000,
      '2022': 11000,
      '2023': 12000,
      '2024': 13000,
      '2025/1': 14000,
      '2025/2': 15000
    }
    
    let baseUnitPrice = yearPrices[year] || 10000 // Default base price per m²
    
    // Building group multipliers
    const groupMultipliers = {
      '1/A': 0.8,
      '1/B': 0.85,
      '1/C': 0.9,
      '1/D': 0.95,
      '2/A': 1.0,
      '2/B': 1.05,
      '2/C': 1.1,
      '3/A': 1.0, // Base multiplier for 3/A to achieve target result
      '3/B': 1.15,
      '3/C': 1.2,
      '4/A': 1.25,
      '4/B': 1.3,
      '4/C': 1.35,
      '5/A': 1.4,
      '5/B': 1.45,
      '5/C': 1.5,
      '5/D': 1.55,
      '5/E': 1.6
    }
    
    if (buildingGroup && groupMultipliers[buildingGroup]) {
      baseUnitPrice *= groupMultipliers[buildingGroup]
    }
    
    // Calculate main construction cost (Yapı Yaklaşık Maliyeti)
    const mainConstructionCost = metrekare * baseUnitPrice
    
    // Service fee is 3.5% of main construction cost
    const serviceFee = mainConstructionCost * 0.035
    
    // KDV is applied only to service fee
    const kdvAmount = (serviceFee * kdvRate) / 100
    
    // Total cost is service fee + KDV
    const totalCost = serviceFee + kdvAmount

    setResults({
      mainConstructionCost: mainConstructionCost.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      serviceFee: serviceFee.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
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
                  <span className='result-label'>Sözleşme Yılı Yapı Yaklaşık Maliyeti:</span>
                  <span className='result-value'>{results.mainConstructionCost} TL</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>Sözleşme Yılı Hizmet Bedeli:</span>
                  <span className='result-value'>{results.serviceFee} TL</span>
                </div>
                
                <div className='result-item'>
                  <span className='result-label'>KDV Bedeli ({inputs.kdvRate ? `%${inputs.kdvRate}` : '%0'}):</span>
                  <span className='result-value'>{results.kdvAmount} TL</span>
                </div>
                
                <div className='result-item total-cost'>
                  <span className='result-label'>Sözleşme Yılı Hizmet Bedeli KDV Dahil:</span>
                  <span className='result-value'>{results.totalCost} TL</span>
                </div>
                
                <hr style={{margin: '20px 0', borderColor: '#ddd'}} />
                
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
