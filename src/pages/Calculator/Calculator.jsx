import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
    const [users, setUsers] = useState(10);
    const [systems, setSystems] = useState(0);
    const [elems, setElems] = useState(0);
    const [contractors, setContractors] = useState(0);
    const [integrationMonitoring, setIntegrationMonitoring] = useState(false);
    const [kpiControl, setKpiControl] = useState(false);
    const [enterprises, setEnterprises] = useState(0);

    const [result, setResult] = useState(null);

    const calculate = () => {
        const totalUsers = Number(users) + Number(contractors);

        let license = 'Standard';
		if (totalUsers <= 50 && enterprises === 0) {license = 'Standard'}
		else if (totalUsers <= 100 && enterprises === 0 || kpiControl) {license = 'Corp'}
		else if (totalUsers > 100 || enterprises >= 1) {license = 'Enterprise'}


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
                monthly = kpiControl ? 515000 : 306000;
                annual = kpiControl ? 5562000 : 3304800;
            }
        } else {
            license = 'Enterprise';
            monthly = 803400;
            annual = 8676720;
        }

        const integrationCost = Math.round(1590 * Number(elems));

        let deploymentDays = 5;
        if (license === 'Corp') deploymentDays = 20;
        if (license === 'Enterprise') deploymentDays =20 + ( 2 * Number(enterprises));

        const totalProject = annual + integrationCost;

        setResult({
            license,
            monthly: monthly.toLocaleString('ru-RU'),
            annual: annual.toLocaleString('ru-RU'),
            integrationCost: integrationCost.toLocaleString('ru-RU'),
            deploymentDays,
            totalProject: totalProject.toLocaleString('ru-RU'),
        });
		console.log(result)
    };

	const handleInputChange = (setter) => (e) => {
		let val = e.target.value;
		if (val.length > 1 && val.startsWith('0')) {
			val = val.substring(1);
		}
		if (val === '') val = '0';
		setter(val);
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
                    <input type="number" min="1" value={users}
						   onChange={handleInputChange(setUsers)}
					/>
                </div>

				<div className="calc-field"> {/*// не влияет на расчеты*/}
					<label>Количество систем (СКУД, СОТ, ОПС, Периметр)</label>
					<input type="number" min="0" value={systems} onChange={handleInputChange(setSystems)} />
				</div>
                <div className="calc-field">
                    <label>Количество элементов ТСО (видеокамеры, датчики, считыватели СКУД) и т.д.</label>
                    <input type="number" min="0" value={elems} onChange={handleInputChange(setElems)} />
                </div>

                <div className="calc-field">
                    <label>Количество пользователей в компании-подрядчике ТО</label>
                    <input type="number" min="0" value={contractors} onChange={handleInputChange(setContractors)} />
                </div>

                <div className="calc-field checkbox">
					<input type="checkbox" checked={integrationMonitoring} onChange={(e) => setIntegrationMonitoring(e.target.checked)} />
                    <label>
						Интеграция - требуется объединить мониторинг охранных систем
					</label>
                </div>

                <div className="calc-field checkbox">
					<input type="checkbox" checked={kpiControl} onChange={(e) => setKpiControl(e.target.checked)} />
                    <label>Контроль выполнения показателей контракта на ТО и ППР</label>
                </div>

                <div className="calc-field">
                    <label>Количество обособленных предприятий</label>
                    <input type="number" min="0" value={enterprises} onChange={handleInputChange(setEnterprises)} />
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
                        <li className="total"><strong>Итого по проекту при оплате за 12 месяцев:</strong> {result.totalProject} руб.</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Calculator;