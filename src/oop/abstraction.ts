// abstract class

abstract class Person {
  abstract getSleep(): void;
}

class Student extends Person {
  getSleep(): void {
    console.log("studnet sleeps 7 hours");
  }
}

class NextLevelDev extends Person {
  getSleep(): void {
    console.log("Next level dev sleeps 3 hours");
  }
}

const s1 = new Student();
// s1.getSleep()

const d1 = new NextLevelDev();
// d1.getSleep()




abstract class Payment {
  abstract pay(amount: number): void;
}

class BkashPayment extends Payment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using Bkash`)
    }
}

class CardPayment extends Payment{
    pay(amount: number): void {
        console.log(`Paid ${amount} using card`)
    }
}

const paybybkash = new BkashPayment();
paybybkash.pay(500)

const paybycard = new CardPayment()
paybycard.pay(1000)



const payments: Payment[] = [
  new BkashPayment(),
  new CardPayment(),
];

payments.forEach((payment) => {
  payment.pay(100);
});
