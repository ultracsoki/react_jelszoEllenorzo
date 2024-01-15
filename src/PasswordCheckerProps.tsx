interface JelszoProps {
  jelszo: string;
}
export function PasswordCheckerProps(props: JelszoProps) {
  const kozepesJelszo = /^[a-zA-Z]{8,}$/;
  if(props.jelszo.length < 8)
  {
    return <p 
    style={{
      color: 'red',
    }}>
      Gyenge
    </p>;
  }
  else if(kozepesJelszo.test(props.jelszo))
  {
    return <p
    style={{
      color: 'orange',
    }}>
      Közepes
    </p>;
  }
  else
  {
    return <p
    style={{
      color: 'green',
    }}>
      Erős
    </p>;
  }
}
