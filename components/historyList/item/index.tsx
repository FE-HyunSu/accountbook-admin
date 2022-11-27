import { AccountCard } from "./style";

interface Props {
  dateTime: string;
  contents: string;
  price: number;
}

const AccountItem = ({ dateTime, contents, price }: Props) => {
  const addComa = (number: number) => {
    const numberComa = number.toString().split(".");
    numberComa[0] = numberComa[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberComa.join(".");
  };

  const shortDate = (date: string) => {
    return date.split("-")[1] + "." + date.split("-")[2];
  };

  return (
    <>
      <AccountCard>
        <dt>
          <span>{shortDate(dateTime.split(" ")[0])}</span>
          <strong>{contents}</strong>
        </dt>
        <dd className={Number(price) > 0 ? `plus` : `minus`}>
          {addComa(price)}
        </dd>
      </AccountCard>
    </>
  );
};

export default AccountItem;
