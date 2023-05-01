export enum deviceScreenType {
    mobile = 'mobile',
    medium = 'medium',
    large = 'large',
}

export const getDeviceScreenType = (): deviceScreenType => {
    const thresholdMobile = 500;
    const thresholdMedium = 1000;

    const screenWidth = window.innerWidth;
    if (screenWidth <= thresholdMobile) {
        return deviceScreenType.mobile;
    } else if (screenWidth <= thresholdMedium) {
        return deviceScreenType.medium;
    } else {
        return deviceScreenType.large;
    }
};
