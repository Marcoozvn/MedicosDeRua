import { Injectable } from '@angular/core';
import { AES, mode, enc} from 'crypto-js';
import * as key from '../../../key.json';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  public cypher(data: string): string {
    return AES.encrypt(data, key.interface.secret, {
        iv: key.interface.iv,
        mode: mode.CBC
    }).toString();
  }
  public decypher(data: string): string {
    const bytes = AES.decrypt(data, key.interface.secret, {
        mode: mode.CBC,
        iv: key.interface.iv
    });
    return bytes.toString(enc.Utf8);
  }
}
