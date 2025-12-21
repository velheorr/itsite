import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
    const [users, setUsers] = useState(10);
    const [systems, setSystems] = useState(0);
    const [contractors, setContractors] = useState(0);
    const [integrationMonitoring, setIntegrationMonitoring] = useState(false);
    const [kpiControl, setKpiControl] = useState(false);
    const [enterprises, setEnterprises] = useState(1);

    const [result, setResult] = useState(null);

    const calculate = () => {
        const totalUsers = Number(users) + Number(contractors);

        let license = 'Standard';
        if (enterprises > 1) {
            license = 'Enterprise';
        } else if (kpiControl) {
            license = 'Corp';
        }

        let monthly = 0;
        let annual = 0;

        if (totalUsers <= 50) {
            if (license === 'Standard') {
                monthly = 182000;
                annual = 1965600;
            } else if (license === 'Corp') {
                monthly = 292000;
                annual = 3153600;
            }
            if (license === 'Enterprise') {
                license = kpiControl ? 'Corp' : 'Standard';
                monthly = kpiControl ? 292000 : 182000;
                annual = kpiControl ? 3153600 : 1965600;
            }
        } else if (totalUsers <= 100) {
            if (license === 'Standard') {
                monthly = 306000;
                annual = 3304800;
            } else if (license === 'Corp') {
                monthly = 515000;
                annual = 5562000;
            }
            if (license === 'Enterprise') {
                license = kpiControl ? 'Corp' : 'Standard';
                monthly = kpiControl ? 515000 : 306000;
                annual = kpiControl ? 5562000 : 3304800;
            }
        } else {
            license = 'Enterprise';
            monthly = 803400;
            annual = 8676720;
        }

        const integrationCost = Math.round(1590 * Number(systems) * 1.2);

        let deploymentDays = 5;
        if (license === 'Corp') deploymentDays = 20;
        if (license === 'Enterprise') deploymentDays = 2 * Number(enterprises);

        const totalProject = annual + integrationCost;

        setResult({
            license,
            monthly: monthly.toLocaleString('ru-RU'),
            annual: annual.toLocaleString('ru-RU'),
            integrationCost: integrationCost.toLocaleString('ru-RU'),
            deploymentDays,
            totalProject: totalProject.toLocaleString('ru-RU'),
        });
    };

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Калькулятор стоимости GuarDiGiDesk®</h1>
            <p className="calculator-desc">
                Заполните параметры, чтобы получить предварительный расчёт лицензии и внедрения.
            </p>

            <div className="calc-form">
                <div className="calc-field">
                    <label>Количество пользователей</label>
                    <input type="number" min="0" value={users} onChange={(e) => setUsers(e.target.value || 0)} />
                </div>

                <div className="calc-field">
                    <label>Количество систем (СКУД, ВН, ОПС, Периметр)</label>
                    <input type="number" min="0" value={systems} onChange={(e) => setSystems(e.target.value || 0)} />
                </div>

                <div className="calc-field">
                    <label>Количество подрядчиков на ТО (добавляется к пользователям)</label>
                    <input type="number" min="0" value={contractors} onChange={(e) => setContractors(e.target.value || 0)} />
                </div>

                <div className="calc-field checkbox">
                    <label>
                        <input type="checkbox" checked={integrationMonitoring} onChange={(e) => setIntegrationMonitoring(e.target.checked)} />
                        Потребность в интеграции с системами мониторинга и управления ТСО
                    </label>
                </div>

                <div className="calc-field checkbox">
                    <label>
                        <input type="checkbox" checked={kpiControl} onChange={(e) => setKpiControl(e.target.checked)} />
                        Контроль выполнения базовых показателей сервисного контракта (KPI)
                    </label>
                </div>

                <div className="calc-field">
                    <label>Количество обособленных предприятий</label>
                    <input type="number" min="1" value={enterprises} onChange={(e) => setEnterprises(e.target.value || 1)} />
                </div>

                <button className="calc-button" onClick={calculate}>
                    Рассчитать стоимость
                </button>
            </div>

            {result && (
                <div className="calc-result">
                    <h2 className="result-title">Результат расчёта</h2>
                    <ul className="result-list">
                        <li><strong>Рекомендуемый тип лицензии:</strong> {result.license}</li>
                        <li><strong>Рекомендуемый срок тестирования:</strong> 3 месяца</li>
                        <li><strong>Стоимость лицензии при ежемесячной оплате:</strong> {result.monthly} руб. (НДС не облагается)</li>
                        <li><strong>Стоимость лицензии при предоплате за 12 месяцев (-10%):</strong> {result.annual} руб. (НДС не облагается)</li>
                        <li><strong>Стоимость интеграционных работ:</strong> {result.integrationCost} руб. (в т.ч. НДС)</li>
                        <li><strong>Срок развертывания и интеграции:</strong> {result.deploymentDays} рабочих дней</li>
                        <li className="total"><strong>Итого по проекту:</strong> {result.totalProject} руб.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Calculator;