import fid from './fid';
import filters from './filters';
import buy1 from './buy1';
import poll from './poll';
import rubik from './rubik';
import bmc from './bmc';
import tip from './tip';
import meow from './meow';
import contact from './contact';

export default async (data: any): Promise<string>=>{
  if(data.text.includes('/filters')){
    return await filters(data);
  }else if(data.text.includes('/buy')){
    return await buy1(data);
  }else if(data.text.includes('/poll')){
    return await poll(data);
  }else if(data.text.includes('/rubik')){
    return await rubik(data);
  }else if(data.text.includes('/fid')){
    return await fid(data);
  }else if(data.text.includes('/tip')){
    return await tip(data);
  }else if(data.text.includes('/meow')){
    return await meow(data);
  }else if(data.text.includes('/contact')){
    return await contact(data);
  }

  return "";
}