import React from 'react';
import styled from 'styled-components';

const TextAreaSC = styled.textarea`
  width: ${({ style }) => style?.width || '30rem'};
  height: ${({ style }) => style?.height || '30rem'};
  background-color: #343434;
  color: white;
  border: none;
  resize: none;
`;

const ContainerSC = styled.div`
  position: relative;
  width: ${({ style }) => style?.width || '30rem'};
  height: ${({ style }) => style?.height || '30rem'};
  margin: ${({ style }) => style?.margin};
`;

interface Props {
  style?: React.CSSProperties;
  readonly?: boolean;
  title?: string;
  body?: Array<Record<string, unknown>>;
  keyType?: string;
}

const TextArea = ({ style, readonly, title, body, keyType }: Props) => {
  if (readonly) {
    if (keyType) {
      return (
        <ContainerSC style={style}>
          <TextAreaSC
            style={{ width: style?.width, height: style?.height }}
            maxLength={200}
            readOnly
            title={title}
          />
          <p style={{ position: 'absolute', left: '40%', top: '5%' }}>
            {title}
          </p>
          <p
            style={{
              position: 'absolute',
              left: '1rem',
              top: '2.5rem',
              width: `${parseInt(String(style?.width), 10) - 2}rem`,
              height: `${parseInt(String(style?.height), 10) - 4}rem`,
              overflow: 'auto',
              overflowWrap: 'anywhere',
            }}
          >
            <BodyRadioList body={body} keyType={keyType} />
          </p>
        </ContainerSC>
      );
    }
    return (
      <ContainerSC style={style}>
        <TextAreaSC
          style={{ width: style?.width, height: style?.height }}
          maxLength={200}
          readOnly
          title={title}
        />
        <p style={{ position: 'absolute', left: '40%', top: '5%' }}>{title}</p>
        <p
          style={{
            position: 'absolute',
            left: '1rem',
            top: '2.5rem',
            width: `${parseInt(String(style?.width), 10) - 2}rem`,
            height: `${parseInt(String(style?.height), 10) - 4}rem`,
            overflow: 'auto',
            overflowWrap: 'anywhere',
          }}
        >
          <BodyJSONList body={body} />
        </p>
      </ContainerSC>
    );
  }
  return (
    <ContainerSC style={style}>
      <TextAreaSC
        style={{ width: style?.width, height: style?.height }}
        maxLength={200}
        title={title}
      />
    </ContainerSC>
  );
};

function BodyJSONList({
  body,
}: {
  body?: Array<Record<string, unknown>>;
}): any {
  if (!body || body?.length < 1) return null;
  const keylist = Object.keys(body[0]);

  function transformObjectInJSX(
    obj: Record<string, unknown> | any,
    keys: Array<string>
  ) {
    if (!keys) return null;
    return (
      <>
        &nbsp;&nbsp;
        {'{'}
        <br />
        {keys.map((keyValue) => {
          if (typeof obj[keyValue] === 'object' && obj[keyValue] !== null) {
            return (
              <React.Fragment key={`${keyValue}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`"${keyValue}:"`}
                {transformObjectInJSX(
                  obj[keyValue],
                  Object.keys(obj[keyValue])
                )}
              </React.Fragment>
            );
          }
          return (
            <React.Fragment key={`${keyValue}`}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {`"${keyValue}":"${obj[keyValue]}"`}
              <br />
            </React.Fragment>
          );
        })}
        &nbsp;&nbsp;
        {'}'}
        <br />
      </>
    );
  }
  return (
    <>
      {'{'}
      <br />
      {body.map((value) => (
        <span key={`${keylist[0]}`}>
          {transformObjectInJSX(value, keylist)}
        </span>
      ))}
      <br />
      {'}'}
    </>
  );
}

function BodyRadioList({
  body,
  keyType,
}: {
  body?: Array<Record<string, unknown>>;
  keyType?: string;
}) {
  if (!body || body?.length < 1) return null;
  const keyList = Object.keys(body[0]);
  return (
    <>
      {keyList.map((value) => (
        <React.Fragment key={`${value}`}>
          <input type="radio" name={String(keyType)} id={value} />
          <label htmlFor={value}>{value}</label>
          <br />
        </React.Fragment>
      ))}
    </>
  );
}

export default TextArea;
