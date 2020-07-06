import React, { ReactNode } from 'react';
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
  children?: string | ReactNode;
}

const TextArea = React.forwardRef(
  (
    { style, readonly, title, body, keyType, children }: Props,
    ref: React.Ref<HTMLTextAreaElement>
  ) => {
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
          ref={ref}
          defaultValue={children}
        />
      </ContainerSC>
    );
  }
);

function BodyJSONList({
  body,
}: {
  body?: Array<Record<string, unknown>>;
}): any {
  if (!body || body?.length < 1) return null;

  function transformObjectInJSX(obj: Record<string, unknown> | any) {
    const keys = Object.keys(obj);
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
                {transformObjectInJSX(obj[keyValue])}
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
      <span>{transformObjectInJSX(body)}</span>
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

  function transform(value: any) {
    let final = '';

    if (Array.isArray(value)) {
      value.forEach((inside) => {
        if (Object.values(inside).length > 0 && typeof inside !== 'string')
          final += `${transform(inside)}`;
        else final += `${inside}`;
      });
    } else {
      const keyList = Object.keys(value);
      keyList.forEach((key) => {
        final += `${key} `;
        if (Array.isArray(value[key])) {
          final += `${transform(value[key])}`;
        } else if (
          Object.keys(value[key])?.length > 0 &&
          typeof value[key] !== 'string'
        ) {
          final += `${transform(value[key])}`;
        } else if (typeof value[key] !== 'number') {
          final += `${value[key]} `;
        }
      });
    }
    return final;
  }

  const result = transform(body);
  const parsedArray: Array<string> = [];

  result
    .trim()
    .split(' ')
    .forEach((value) => {
      if (parsedArray.indexOf(value) === -1) parsedArray.push(value);
    });

  return (
    <>
      {parsedArray.map((value) => (
        <React.Fragment key={`${value}`}>
          <input type="radio" name={String(keyType)} id={value} />
          <label htmlFor={value}>{value}</label>
          <br />
        </React.Fragment>
      ))}
    </>
  );
}

TextArea.displayName = 'SomeTextArea';

export default TextArea;
