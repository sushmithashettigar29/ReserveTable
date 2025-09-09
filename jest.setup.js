// jest.setup.js
import '@testing-library/jest-dom'; // adds toBeInTheDocument, etc.

import { TextEncoder, TextDecoder } from 'util';
globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;

// Optional: polyfill fetch if needed
import 'whatwg-fetch';
