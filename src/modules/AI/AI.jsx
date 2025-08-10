import React, { useState } from "react";
import symptomsMap from "../../assets/data/symptomsMap.json";
import data from "../../assets/data/medisineces.json";
import "../../assets/scss/modules/_ai.scss";

export default function AI() {
  const [symptom, setSymptom] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const symptomKey = symptom.trim().toLowerCase();
    const medNames = symptomsMap[symptomKey];

    setSearched(true);

    if (!medNames) {
      setSuggestions([]);
      return;
    }

    const medNamesLower = medNames.map((name) => name.toLowerCase());

    const matched = data.filter((med) =>
      medNamesLower.includes(med.name.trim().toLowerCase())
    );

    setSuggestions(matched);
  };

  return (
    <div>

      <div className="container">
        <div
          className="ai-helper"
          style={{
            padding: "20px",
            maxWidth: "700px",
            margin: "0 auto",
            marginTop: "80px",
          }}
        >
          <h1>🤖 AI помощник</h1>
          <p>Введите ваш симптом, и мы подскажем подходящее лекарство</p>

          <div className="search" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Например: жар, кашель, головная боль"
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
            />
            <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
              Найти
            </button>
          </div>
        </div>

        {searched && (
          <div className="suggestions">
            {suggestions.length === 0 ? (
              <p>Ничего не найдено по симптому 😔</p>
            ) : (
              <>
                <h3>
                  Результаты по запросу: <em>"{symptom}"</em>
                </h3>
                <div
                  className="cards"
                  style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
                >
                  {suggestions.map((med, index) => (
                    <div
                      key={index}
                      className="suggestion-card"
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "12px",
                        width: "calc(50% - 16px)",
                        boxSizing: "border-box",
                      }}
                    >
                      <img
                        src={med.img}
                        alt={med.name}
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                      <div>
                        <h4>{med.name}</h4>
                        <p>{med.description}</p>
                        <p>
                          <strong>{med.price} сом</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
