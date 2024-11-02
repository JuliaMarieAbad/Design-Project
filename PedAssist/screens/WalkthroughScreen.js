import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid, Button } from 'react-native';

const steps = [
    { description: "Tie the tourniquet on the patient's upper arm", duration: 60 },
    { description: "Use a cotton swab to sanitize the puncture site", duration: 5 },
    { description: "Insert needle with the bevel facing up at 15-30 degree angle", duration: 10 },
    { description: "Extract the blood sample", duration: 5 },
];

const WalkthroughScreen = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [timeLeft, setTimeLeft] = useState(steps[0].duration);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (currentStep >= steps.length) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setCurrentStep(prevStep => prevStep + 1);
                    setTimeLeft(steps[currentStep + 1]?.duration || 0);
                    setProgress(((prevStep + 1) / steps.length) * 100);
                    return steps[currentStep + 1]?.duration || 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentStep]);

    const resetWalkthrough = () => {
        setCurrentStep(0);
        setTimeLeft(steps[0].duration);
        setProgress(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Venipuncture Steps</Text>
            {currentStep < steps.length ? (
                <>
                    <Text style={styles.stepDescription}>{steps[currentStep].description}</Text>
                    <Text style={styles.timer}>Time left: {timeLeft} seconds</Text>
                    <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress / 100} />
                </>
            ) : (
                <Text style={styles.completed}>All steps completed!</Text>
            )}
            <Button title="Reset Walkthrough" onPress={resetWalkthrough} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stepDescription: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    timer: {
        fontSize: 16,
        marginBottom: 10,
    },
    completed: {
        fontSize: 20,
        color: 'green',
        marginBottom: 20,
    },
});

export default WalkthroughScreen;