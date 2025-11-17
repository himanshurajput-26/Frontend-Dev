function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  console.log(`Conditions -> Alarm: ${isAlarmOn}, DoorLocked: ${isDoorLocked}, WindowClosed: ${isWindowClosed}, OwnerInside: ${isOwnerInside}`);
  console.log(secure ? "Secure" : "Unsafe");
}

checkSecurity(true, true, true, true);   
checkSecurity(true, true, false, true);  
checkSecurity(true, false, true, true);  
checkSecurity(false, true, true, true);  
