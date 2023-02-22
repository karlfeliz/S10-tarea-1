import React from "react";
import "./BankAccount.css";

const BankAccount = () => {
  const [account, setAccount] = React.useState({
    name: "Fran",
    savings: 5000,
    founds: 1000,
  });

  const takeMoney = () => {
    // MANERA ANTIGUA DE CLONAR OBJETOS
    // const newAccount = JSON.parse(JSON.stringify(account));

    // MANERA MODERNA (SPREAD)
    const newAccount = { ...account };
    newAccount.savings = newAccount.savings - 50;
    if (newAccount.savings >= 0) {
      setAccount(newAccount);
    } else {
      alert("Amigo... aún no has ahorrado 50€...")
    }
  }

  const addMoney = () => {
    // const newAccount = {...account};
    // newAccount.savings = newAccount.savings + 100;

    // Manera abreviada
    const newAccount = {
      ...account,
      savings: account.savings + 100,
    }
    setAccount(newAccount);
  }

  const addMoneyToFounds = () => {
    // PPIO DE INMUTABILIDAD 
    // SIEMPRE CREAMOS OBJETOS NUEVOS, NO MODIFCAMOS
    const newAccount = {
      ...account,
      savings: account.savings - 1000,
      founds: account.founds + 1000,
    }
    if (newAccount.savings < 1000) {
      alert("Debes ahorrar al menos 1000€")

    } else {
      setAccount(newAccount);
    }
  }

  return (
    <>
      <p>El titular de la cuenta es: {account.name}</p>
      <p>El saldo de la cuenta de ahorros es: {account.savings}€</p>
      <p>El total del fondo de inversión es: {account.founds}€</p>

      <button onClick={takeMoney}>Retirar 50€</button>
      <button onClick={addMoney}>Ingresar 100€</button>
      <button onClick={addMoneyToFounds}>Meter en fondos 1000€</button>
    </>
  );
}

export default BankAccount;

