import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from 'components/generic/Icon'

const CoinConvertorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const CoinConvertorInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`
const TextBoxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
const TextBox = styled.input.attrs({
  placeholder: '0',
  type: 'text'
})`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 40px;
  padding: 6px 12px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.42;
  color: #555555;
  background-color: #FFFFFF;
  background-image: none;
  outline-width: 0;
  user-select: text;
  border: 1px solid ${props => props.errorState === 'initial' ? '#CCCCCC' : props.errorState === 'invalid' ? '#990000' : '#006600'};

  &::-webkit-input-placeholder { color: #A8A8A8; }
`
const TextBoxUnit = styled.span`
  position: absolute;
  padding: 0 15px;
  color: #A8A8A8;
`

const IconArrow = styled(Icon).attrs({
  name: 'ti-arrows-horizontal'
})`
  font-size: 20px;
  width: 20px;
  margin: 0 5px;
`
const CoinConvertorError = styled.label`
  display: block;
  font-size: 13px;
  font-weight: 300;
  color: #FF0000;
`

const CoinConvertor = (props) => {
  const { coinValue, fiatValue, coinUnit, fiatUnit, handleCoinChange, handleFiatChange, ...rest } = props
  const { onBlur, onFocus } = rest.input
  const { touched, invalid, error } = rest.meta
  const errorState = !touched ? 'initial' : (invalid ? 'invalid' : 'valid')

  return (
    <CoinConvertorWrapper>
      <CoinConvertorInput>
        <TextBoxContainer>
          <TextBox onChange={handleCoinChange} value={coinValue} errorState={errorState} onBlur={onBlur} onFocus={onFocus} />
          <TextBoxUnit>{coinUnit}</TextBoxUnit>
        </TextBoxContainer>
        <IconArrow />
        <TextBoxContainer>
          <TextBox onChange={handleFiatChange} value={fiatValue} errorState={errorState} />
          <TextBoxUnit>{fiatUnit}</TextBoxUnit>
        </TextBoxContainer>
      </CoinConvertorInput>
      {touched && error && <CoinConvertorError>{error}</CoinConvertorError>}
    </CoinConvertorWrapper>
  )
}

CoinConvertor.propTypes = {
  coinValue: PropTypes.string,
  fiatValue: PropTypes.string,
  coinUnit: PropTypes.string.isRequired,
  fiatUnit: PropTypes.string.isRequired,
  handleCoinChange: PropTypes.func.isRequired,
  handleFiatChange: PropTypes.func.isRequired
}

export default CoinConvertor
