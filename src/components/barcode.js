    import { useEffect, useRef } from 'react';
    import JsBarcode from 'jsbarcode';

    export default function VerticalBarcode({ value }) {
    const barcodeRef = useRef(null);

    useEffect(() => {
        if (barcodeRef.current) {
        JsBarcode(barcodeRef.current, value, {
            format: 'CODE128',
            lineColor: '#000',
            width: 1,
            height: 100,
            displayValue: false,
        });
        }
    }, [value]);

    return (
        <div className="flex flex-col items-center justify-center">
        <svg ref={barcodeRef} className="flex transform rotate-90 mb-4 hover:rotate-45"></svg>
        <div className="writing-mode-vertical-rl transform rotate-90 text-center">{value}</div>
        </div>
    );
    }
